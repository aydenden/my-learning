FROM node:23 AS build

RUN npm i -g pnpm
# 작업 디렉토리 설정
WORKDIR /app
COPY .. /app
# 의존성 설치
RUN pnpm install
# 빌드
RUN pnpm build

FROM nginx:1.27.5-alpine

# nginx html 폴더에 build from 결과물을 복사
COPY --from=build /app/dist/ /usr/share/nginx/html

# nginx 설정 파일을 복사
COPY app.nginx.conf /etc/nginx/nginx.conf

# 80포트 오픈
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]