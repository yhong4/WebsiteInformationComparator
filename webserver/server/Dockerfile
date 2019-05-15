FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /serverapp

# copy csproj and restore as distinct layers
COPY *.sln .
COPY server/*.csproj ./server/
RUN dotnet restore

# copy everything else and build app
COPY server/. ./server/
WORKDIR /serverapp/server
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /serverapp
COPY --from=build /serverapp/server/out ./
ENTRYPOINT ["dotnet", "server.dll"]

EXPOSE 9091