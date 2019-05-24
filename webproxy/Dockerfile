FROM golang:alpine as builder
RUN apk --no-cache add git
RUN go get -u github.com/improbable-eng/grpc-web/go/grpcwebproxy

FROM alpine
RUN apk --no-cache add ca-certificates
WORKDIR /
COPY --from=builder /go/bin/grpcwebproxy .
CMD ["/grpcwebproxy", "--backend_addr=server:9091", "--backend_max_call_recv_msg_size=10485760000","--run_tls_server=false", "--use_websockets", "--allow_all_origins", "--server_bind_address=0.0.0.0","--server_http_debug_port=8000"]
EXPOSE 8000 9091