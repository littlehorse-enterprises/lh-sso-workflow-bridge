FROM ghcr.io/littlehorse-enterprises/alpine-nginx-nodejs/nginx-nodejs:main AS runner
ENV NODE_ENV=production

WORKDIR /app

COPY ./ui/.next/standalone/ui ./
COPY ./ui/.next/standalone/node_modules ./node_modules
COPY ./ui/.next/static ./.next/static

COPY ./entrypoint.sh ./

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV="production"

ENTRYPOINT [ "./entrypoint.sh" ]