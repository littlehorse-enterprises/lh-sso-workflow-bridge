FROM ghcr.io/littlehorse-enterprises/alpine-nginx-nodejs/nginx-nodejs:main
WORKDIR /app

COPY ./console/.next/standalone/console ./
COPY ./console/.next/standalone/node_modules ./node_modules
COPY ./console/.next/static ./.next/static

COPY ./entrypoint.sh ./

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]
