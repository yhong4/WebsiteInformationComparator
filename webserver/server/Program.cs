using System;
using System.Linq;
using Grpc.Core;
using Msyrpc;
using server.Models;
using server.Services;

namespace server
{
    class Program
    {
        static void Main(string[] args)
        {
            const int port = 9091;
            Server server = new Server
            {
                Services = {PriceComparisonService.BindService(new PricecomparisonServices())},
                Ports = {new ServerPort("0.0.0.0", port, ServerCredentials.Insecure)}
            };

            server.Start();
            Console.WriteLine("server start on port:"+port);

            server.ShutdownTask.Wait();
        }
    }
}
