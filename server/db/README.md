### From / to a json array file and a local server

```bash
$ mongoimport -d taller -c clients --drop --jsonArray --file data/clients.json

$ mongoexport -d taller -c clients --jsonArray -o data/clients.json
```

```bash
$ mongoimport -d taller -c products --drop --jsonArray --file data/products.json

$ mongoexport -d taller -c products --jsonArray -o data/products.json
```

```bash
$ mongoimport -d taller -c workshops --drop --jsonArray --file data/workshops.json

$ mongoexport -d taller -c workshops --jsonArray -o data/workshops.json
```

```bash
$ mongoimport -d taller -c reparations --drop --jsonArray --file data/reparations.json

$ mongoexport -d taller -c reparations --jsonArray -o data/reparations.json
```

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