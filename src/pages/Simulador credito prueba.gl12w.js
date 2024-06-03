@import url('https://fonts.googleapis.com/css?family=DM+Sans&display=swap');

* {
  box-sizing: border-box;
}

body {
  background: linear-gradient(to right, white, white);
  font-family: 'DM Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

#contenedor, #contenedorTabla {
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 400px;
  max-width: 100%;
  margin: 20px;
}

#contenedorTabla {
  width: 800px;
  max-height: 820px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: royalblue;
}

.header, thead {
  border-bottom: 1px solid #F0F0F0;
  background-color: #F7F7F7;
  padding: 20px 40px;
}

.header h2 {
  margin: 0;
}

#frmPrestamo {
  padding: 30px 40px;
}

#frmPrestamo .control, #amortizaciones .control, .radios {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

#frmPrestamo .control label {
  margin-bottom: 5px;
}

#frmPrestamo .control input, #frmPrestamo .control select {
  border: 2px solid #F0F0F0;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}

#frmPrestamo .control input:focus {
  outline: 0;
  border-color: royalblue;
}

#frmPrestamo button {
  background: rgba(65, 105, 225, 90%);
  border: 2px solid royalblue;
  border-radius: 4px;
  color: #FFF;
  display: block;
  font-family: inherit;
  font-size: medium;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}

table {
  border: 2px solid royalblue;
  border-collapse: collapse;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 0.9em;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

table thead tr {
  background: royalblue;
  color: white;
  text-align: left;
  font-weight: bold;
}

table thead, td {
  padding: 12px 15px;
}

table tbody tr {
  border-bottom: 1px solid #F0F0F0;
}

table tbody tr:nth-last-of-type(even) {
  background-color: #F3F3F3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid royalblue;
}

table tbody tr:hover {
  color: white;
  background: rgba(65, 105, 225, 90%);
}

table tfoot {
  background: royalblue;
  color: white;
}

.radios {
  padding: 10px 20px;
}

.radioContenedor {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 30px;
  margin: 10px;
}

.radioContenedor input {
  display: none;
}

.radioContenedor .circle {
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  display: inline-block;
  background-color: rgba(65, 105, 225, 90%);
  border-bottom: 2px solid royalblue;
}

.radioContenedor:hover .circle {
  background-color: royalblue;
}

.radioContenedor input:checked + .circle {
  background-color: royalblue;
}

.radioContenedor input:checked + .circle:after {
  content: '';
  height: 10px;
  width: 10px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
