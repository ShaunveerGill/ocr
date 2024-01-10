import easyocr

def ocrRes(image_path):

    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path)
    print('hello')
    for (bbox, text, prob) in result:
        print('loop')
        print(f'Text: {text}, Probability: {prob}')

imagepath = 'path/to/file' 
ocrRes(imagepath)

