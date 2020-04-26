var context = {
    "mission": {
        "title": "Test",
        "subtitle": "model test",
        "description": "do the test thing",
        "modelURL": `${links.models}/cube.gltf`,
        "modelAlt": "cube model",
        "annotations": [
            {
                "slot":"hotspot-hand",
                "position": "100 112 100",
                "normal": "0 0 1",
                "text": "It's a corner!!"
            }
        ]
      },
  }
  
  var templateScript = Handlebars.templates.test(context);
  
  $('main').append(templateScript);