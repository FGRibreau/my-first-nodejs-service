##
# NAME             : iadvize/my-first-nodejs-service
# VERSION          : latest
# DOCKER-VERSION   : 1.5
# DESCRIPTION      :
# TO_BUILD         : docker build --pull=true --no-cache -t iadvize/my-first-nodejs-service .
# TO_SHIP          : docker push iadvize/my-first-nodejs-service
# TO_RUN           : docker run -d iadvize/my-first-nodejs-service
##

FROM iadvize/nodejs:4

COPY .npmrc /root/.npmrc

COPY package.json /app/package.json

WORKDIR /app

RUN npm install

COPY . /app

EXPOSE 8080

CMD ["node", "server.js"]
