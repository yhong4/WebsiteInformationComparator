FROM mcr.microsoft.com/windows/nanoserver:1809

COPY . .

CMD grpcwebproxy.exe --backend_addr=server:9091 --run_tls_server=false --use_websockets --allow_all_origins --backend_max_call_recv_msg_size=104857600
EXPOSE 8080 9091