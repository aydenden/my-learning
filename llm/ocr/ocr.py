# GPT가 답해준 bun, TS 기반으로 변경해서 이어가보기

import pytesseract
from pdf2image import convert_from_path
import sys

# PDF 파일 경로
pdf_path = sys.argv[1]

# 이미지로 변환
images = convert_from_path(pdf_path)

text = ""

# OCR 실행 (각 페이지별로)
for img in images:
    text += pytesseract.image_to_string(img, lang="kor") + "\n"

# 결과를 텍스트 파일로 저장
with open("output.txt", "w", encoding="utf-8") as file:
    file.write(text)

print("OCR 처리 완료. 결과가 output.txt에 저장되었습니다.")
