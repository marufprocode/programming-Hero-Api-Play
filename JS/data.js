const loadData = async () => {
    try{
        const res = await fetch('http://openapi.programming-hero.com/api/course/curriculum');
        const data = await res.json();
        displayData(data.data);
    }
    catch(err){
        console.log(err);
    }
}

loadData();

const displayData = (milestones) => {
    const acodionContainer = document.getElementById('accordionFlushExample');
    // console.log(strImage);
    acodionContainer.innerHTML = `
        ${milestones.map(milestone => {
            const strImage = milestone.image;
            return `
                <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${milestone._id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${milestone._id}" aria-expanded="false" aria-controls="flush-collapse${milestone._id}" onclick="showMilestoneImage('${strImage}')">
                <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault${milestone._id}"><pre> </pre>${milestone.name}
                </button>
                </h2>
                <div id="flush-collapse${milestone._id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${milestone._id}" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                ${milestone.modules.map(module => {
                    return `
                        <p class="my-1 p-2 border border-primary">${module.name}</p>
                    `;
                }).join("")}
                </div>
                </div>
                </div>
            `
        }).join("")}
    `;
}

const showMilestoneImage = (milestone) => {
    const imageDiv = document.getElementById('milestone-image');
    imageDiv.style.opacity = "0";
    imageDiv.src = milestone;
}

const imageDiv = document.getElementById('milestone-image');
imageDiv.onload = function () {
    this.style.opacity = "1";
}
