### From / to a json array file and a remote server (mLab)

mongodb://sergi145:<pasword>@ds255455.mlab.com:55455/sergipicazo

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d sergipicazo -c clients -u sergi145 -p <password> --drop --jsonArray --file data/clients.json

$ mongoexport -h ds255455.mlab.com:55455 -d sergipicazo -c clients -u sergi145 -p <password>  --jsonArray -o data/clients-exported-from-mlab.json
```

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d sergipicazo -c products -u sergi145 -p <password> --drop --jsonArray --file data/products.json

$ mongoexport -h ds255455.mlab.com:55455 -d sergipicazo -c products -u sergi145 -p <password>  --jsonArray -o data/products-exported-from-mlab.json
```

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d sergipicazo -c workshops -u sergi145 -p <password> --drop --jsonArray --file data/workshops.json

$ mongoexport -h ds255455.mlab.com:55455 -d sergipicazo -c workshops -u sergi145 -p <password>  --jsonArray -o data/workshops-exported-from-mlab.json
```

```bash
$ mongoimport -h ds255455.mlab.com:55455 -d sergipicazo -c reparations -u sergi145 -p <password> --drop --jsonArray --file data/reparations.json

$ mongoexport -h ds255455.mlab.com:55455 -d sergipicazo -c reparations -u sergi145 -p <password>  --jsonArray -o data/reparations-exported-from-mlab.json
```