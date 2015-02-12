from django.http import HttpResponse
from django.shortcuts import render
import requests
import json

def makerestore(request):
    	host='http://nfsaas-api.cloud.globoi.com' 
        endpoint='/times/1/projetos/1/ambientes/1/tamanhos/1/exports/43/snapshots/1/restore'

        data = {'notify-url': 'http://localhost/notifi-me/'}
        headers = {'content-type': 'application/json'}

        r = requests.post(host + endpoint, auth=('admin','123'), data=json.dumps(data), headers=headers)		
        print r.status_code

        return HttpResponse("Retorno >> " + str(r.json()))


def howtomakerestore(request):
	template_path = 'restore.html'
	return render(request, template_path)

def test(request):
    return HttpResponse("{ id: '1', path: 'vol...' }")