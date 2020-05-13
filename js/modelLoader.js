console.log("javascript loaded")

function load_model(data) {
    console.log("running load_model")
    console.log(data)
    let annotations = ``
    data.annotations.forEach(function(annotation) {
        annotations = annotations + `<div class="annotation-button" slot="${annotation.slot}" data-position="${annotation.position}" data-normal="${annotation.normal}" >
                                        <div class="annotation">${annotation.text}</div>
                                    </div>`
    });
    console.log(annotations)
    let model_viewer = `<model-viewer class="model-viewer" camera-controls src="${data.modelURL}" alt="${data.modelAlt}">
                            ${annotations}
                        <model-viewer>`
    console.log(model_viewer)
    $('.model-container').html(model_viewer)

    $('.model-viewer').children().click(function() {
        if($(this).hasClass('selected')){
            $(this).removeClass('selected')
        }
        else {
            $('.model-viewer').children().removeClass('selected')
            $(this).addClass('selected')
        }
    }) 
}

// <model-viewer class="model-viewer" camera-controls src="{{mission.modelURL}}" alt="{{mission.modelAlt}}">
//                 {{#each mission.annotations}}
//                     <div class="annotation-button" slot="{{slot}}" data-position="{{position}}" data-normal="{{normal}}">
//                         <div class="annotation">{{text}}</div>
//                     </div>
//                 {{/each}}
//             </model-viewer>
