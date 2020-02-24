import cv2
import numpy as np
import os
import random

# folder names do not include trailing slash
def dataset(folder):
	images = []
	for image in os.listdir(folder):
		if not '.' in image:
			continue
		images.append(cv2.imread(folder + '/' + image, cv2.IMREAD_COLOR))
	return images

def get_replacements(folder):
	images = []
	for image in os.listdir(folder):
		if not '.' in image:
			continue
		images.append(cv2.imread(folder + '/' + image, cv2.IMREAD_UNCHANGED))
	return images	

def get_random(arr):
	return arr[random.randint(0,len(arr)-1)]

images = dataset("People")
replaces = get_replacements("Replacements")

shuffled = 0
next_index = 0
def get_next():
	global shuffled
	global next_index
	if(shuffled == 0):
		random.shuffle(replaces)
	image = replaces[next_index]
	next_index += 1
	if(next_index > len(replaces)):
		shuffled = 0
		next_index = 0

class FaceDetector(object):
	def __init__(self, xml_path):
		self.classifier = cv2.CascadeClassifier(xml_path)
	
	def detect(self, image, biggest_only=True):
		scale_factor = 1.2
		min_neighbors = 5
		min_size = (30,30)
		biggest_only = True
		faces_coord = self.classifier.detectMultiScale(image, scaleFactor=scale_factor, minNeighbors=min_neighbors, minSize=min_size, flags=cv2.CASCADE_SCALE_IMAGE)
		return faces_coord

	def cut_faces(self, image, faces_coord):
		faces = []
	
		for (x,y,w,h) in faces_coord:
			w_rm = int(0.3 * w/2)
			faces.append(image[y:y+h, x+w_rm:x+w-w_rm])
		return faces

	def resize(self, images, size=(224, 224)):
		images_norm = []
		for image in images:
			if(image.shape < size):
				image_norm = cv2.resize(image, size, interpolation=cv2.INTER_AREA)
			else:
				image_norm = cv2.resize(image, size, interpolation=cv2.INTER_CUBIC)
			images_norm.append(image_norm)
		return images_norm
	
	def normalize_faces(self, image, faces_coord):
		faces = self.cut_faces(image, faces_coord)
		faces = self.resize(faces)
		return faces

def resize(image, size=(224,224)):
	if(image.shape < size):
		image = cv2.resize(image, size, interpolation=cv2.INTER_AREA)
	else:
		image = cv2.resize(image, size, interpolation=cv2.INTER_CUBIC)
	return image

detector = FaceDetector("model.xml")
count = 0
for image in images:
	faces_coord = detector.detect(image, True)
	for (x,y,w,h) in faces_coord:
		replace_face = get_random(replaces)
		#replace_face = get_next() UNDER CONSTRUCTION
		resized = resize(replace_face, (h+2*int(h/3),w+2*int(w/3)))
		y -= int(h/3)
		x -= int(h/3)
		h += 2*int(h/3)
		
		for col in range(y, y+h):
			for row in range(x, x+h):
				if(resized[col-y,row-x][-1] == 0):
					continue
				image[col,row] = resized[col-y,row-x][:-1]
		
	cv2.imwrite('test' + str(count) + '.jpeg', image)
	count += 1	
	