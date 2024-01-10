import easyocr
import sys

def ocrRes(image_path):
    res = ''
    print('hllo')
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path)
    for items in result:
        res += items[1] + ' '
    return res.strip()

if __name__ == "__main__":

    image_path = '/Users/shaun/Desktop/download.jpg'

    #image_path = sys.argv[1]
    result = ocrRes(image_path)
    print(result)