FROM mcr.microsoft.com/dotnet/sdk:6.0 as build-image

WORKDIR /home/app/BackEnd

COPY BackEnd/*.sln ./
COPY BackEnd/*/*.csproj ./
RUN for file in $(ls *.csproj); do mkdir -p ./${file%.*}/ && mv $file ./${file%.*}/; done

RUN dotnet restore

COPY . .


RUN dotnet publish ./BackEnd/Locadora/Locadora.csproj -o /publish/

FROM mcr.microsoft.com/dotnet/aspnet:6.0	

WORKDIR /publish

ENV ASPNETCORE_ENVIRONMENT="Docker"

EXPOSE 80
COPY --from=build-image /publish .

ENTRYPOINT ["dotnet", "Locadora.dll"]