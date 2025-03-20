FROM nginx:latest
LABEL authors="aydenden"

# nginx html 폴더에 dist 빌드 결과물을 복사
COPY ./dist/ /usr/share/nginx/html

# nginx 설정 파일을 복사
COPY ./nginx.conf /etc/nginx/nginx.conf

# 80포트 오픈
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]



