var canvas=document.getElementById("dk")
var drawing=canvas.getContext("2d")
drawing.beginPath()
drawing.strokeStyle="black"
drawing.lineWidth=3
drawing.rect(150,143,430,200)
drawing.stroke()

drawing.beginPath()
drawing.strokeStyle="blue"
drawing.lineWidth=3
drawing.arc(250,210,40,0,2*Math.PI)
drawing.stroke()

drawing.beginPath()
drawing.strokeStyle="black"
drawing.lineWidth=3
drawing.arc(320,210,40,0,2*Math.PI)
drawing.stroke()

drawing.beginPath()
drawing.strokeStyle="red"
drawing.lineWidth=3
drawing.arc(390,210,40,0,2*Math.PI)
drawing.stroke()

drawing.beginPath()
drawing.strokeStyle="yellow"
drawing.lineWidth=3
drawing.arc(290,260,40,0,2*Math.PI)
drawing.stroke()

drawing.beginPath()
drawing.strokeStyle="green"
drawing.lineWidth=3
drawing.arc(360,260,40,0,2*Math.PI)
drawing.stroke()