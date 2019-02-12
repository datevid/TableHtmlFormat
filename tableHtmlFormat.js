var data = [
  {
    "titulo": "OFICIO -2018-GG",
    "subtitulo": "GERENCIA GENERAL",
    "fecha": "08/03/2018",
    "dependencia": "GERENCIA GENERAL",
    "importancia": "ORIGINAL",
    "nuAnn": "2018",
    "nuEmi": "62",
    "nuDes": "106",
    "tipo": "documento"
  },
  {
    "titulo": "OFICIO -2018-GG",
    "subtitulo": "GERENCIA GENERAL",
    "fecha": "08/03/2018",
    "dependencia": "GERENCIA GENERAL",
    "importancia": "COPIA",
    "nuAnn": "2018",
    "nuEmi": "62",
    "nuDes": "108",
    "tipo": "documento"
  },
  {
    "titulo": "OFICIO -2018-GG",
    "subtitulo": "GERENCIA GENERAL",
    "fecha": "08/03/2018",
    "dependencia": "GERENCIA CENTRAL DE POTENCIAL HUMANO",
    "importancia": "COPIA",
    "nuAnn": "2018",
    "nuEmi": "62",
    "nuDes": "107",
    "tipo": "documento"
  }
];

/*
inspirado en https://bit.ly/2DAwSZW
*/
class TableHtmlFormat {
    constructor(elementIdRender, dataTable,nameHeaderCustom) {
        this.elementIdRender = elementIdRender; //elementIdRender donde se dibujará la tabla
        this.dataTable = dataTable;
        this.elementIdTable = 'tableIdTrazabilidad';//interno propio del componente
        //this.colHeader = [];
        this.col = [];
        this.setConfig(nameHeaderCustom);
        //execute
        this.createTable();


    }
    setConfig(nameHeaderCustom){
        // EXTRACT VALUE FOR TABLE HEADER.
        if(nameHeaderCustom==null){
            this.setNamesHeaderFull();
        }else{
            this.setNamesHeaderCustom(nameHeaderCustom);
        }
    }

    createTable() {

        // EXTRACT VALUE FOR TABLE HEADER.
        //this.setNamesHeaderFull();
        //this.setNamesHeaderCustom(["DOCUMENTO_", "FECHA_ENVIO","ORIGEN", "DESTINO"]);


        // CREATE A TABLE.
        var table = document.createElement('table');
        table.setAttribute('id', this.elementIdTable); // SET TABLE ID.
        table.setAttribute('class', 'table table-sm table-bordered');
        table.setAttribute('style', 'font-size:11px');

        var tr = table.insertRow(-1); // CREATE A ROW (FOR HEADER).

        for (var h = 0; h < this.col.length; h++) {
            // ADD TABLE HEADER.
            var th = document.createElement('th');
            th.innerHTML = this.col[h].replace('_', ' ');
            tr.appendChild(th);
        }

        // ADD ROWS USING JSON DATA.
        for (var i = 0; i < this.dataTable.length; i++) {

            // Insert a row at the end of the table
            tr = table.insertRow(-1); // CREATE A NEW ROW.

            for (var j = 0; j < this.col.length; j++) {
                var tabCell = tr.insertCell(-1);
                //tabCell.setAttribute('style', 'padding-left:'+''+'px');
                tabCell.innerHTML = this.dataTable[i][this.col[j]].replace('null','');

            }

            // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.
            //this.setDinamicElementsOptions(tr, i);

        }

        var div = document.getElementById(this.elementIdRender);
        div.innerHTML = '';
        div.appendChild(table); // ADD THE TABLE TO THE WEB PAGE.

    }

    // EXTRACT VALUE FOR TABLE HEADER.
    setNamesHeaderCustom(namesHeader) {
        //this.colHeader=namesHeader;
        this.col = namesHeader;
    }

    // EXTRACT VALUE FOR TABLE HEADER.
    setNamesHeaderFull() {
        for (var i = 0; i < this.dataTable.length; i++) {
            for (var key in this.dataTable[i]) {
                if (this.col.indexOf(key) === -1) {
                    this.col.push(key);
                }
            }
        }
        //this.colHeader=this.col;
    }
}

//let table1 = new TableHtmlFormat('container', data); //or
let table1 = new TableHtmlFormat('container', data,["titulo", "fecha","subtitulo", "dependencia"]);