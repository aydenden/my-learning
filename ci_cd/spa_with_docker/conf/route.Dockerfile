FROM nginx:alpine

# 사용자 정의 설정 파일들을 복사
COPY conf/route.nginx.conf /etc/nginx/nginx.conf
COPY conf/route.active.conf /etc/nginx/conf.d/active.conf

# 80 포트 노출
EXPOSE 80

# 헬스체크 추가
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/health || exit 1

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]