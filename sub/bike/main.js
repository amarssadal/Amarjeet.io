//|CONSTROLS THE INTERNAL DATA STRUCTURE
document.querySelector('.copyYear').innerHTML = new Date().getFullYear();
let configControl = (function () {
    let costs, currentBike, cost;
    
    //=============|BIKE PRICE AS IT STANDS
    totalPrice = 0;
    
    //=============|COSTINGS FOR ALL COMPONENTS
    pricing = {
        frame: {
            r5: 3699,
            veltrix: 899,
            orca: 1299,
            madone: 4000
        },
        handleBar: {
            aerobar: 900,
            alanera: 664,
            aerofly: 250,
            aero: 509,
            s5: 356,
        },
        saddle: {
            tekno: 424,
            c59: 331,
            carbonio: 284
        },
        wheel: {
            firecrest: 1675,
            cosmic: 2450,
            clincher: 1423
        },
        tyre: {
            fusion: 200,
            grinder: 190,
            corsa: 140
        },
        groupSet : {
            red: 2300,
            super: 2099,
            dura: 2200
        },
        pedals : {
            9100: 205,
            keo: 255,
            zero: 284
        },
        chain : {
            speed: 67,
            record: 55,
            eagle: 73
        }
    }
    
    //=============|SAVE CURRENT BIKE SPECS
    currentBike = {
        frame: {chosen: 'none', cost: 0},
        handleBar: {chosen: 'none', cost: 0},
        saddle: {chosen: 'none', cost: 0},
        wheel: {chosen: 'none', cost: 0},
        tyre: {chosen: 'none', cost: 0},
        groupSet: {chosen: 'none', cost: 0},
        pedal: {chosen: 'none', cost: 0},
        chain: {chosen: 'none', cost: 0}
    }
    
    //=============|CONVERT AMOUNT INTO PROPER PRICE DISPLAY
    function convert(x) {
        if(!x || x === NaN) { return '0.00' };
        x = x.toString();
        let first = x.split('');
        let second;
        
        if (first.indexOf('.') !== -1) {
            second = first.splice(first.indexOf('.'), 3)
            second.shift();
        } else {
            second = ['0', '0'];
        }
        
        if (first.length > 3) {
            first.splice(first.length - 3, 0, ',');
        }
        
        return first.join('') + '.' + second.join('');
    }
    
    //=============|UPDATE BIKE WITH SELECTED COMPONENTS
    function updateBike(compName, compChosen) {
        compChosen !== 'none' ?currentBike[compName].chosen = compChosen :currentBike[compName].chosen = 0;
        compChosen !== 'none' ?currentBike[compName].cost = pricing[compName][compChosen] :currentBike[compName].cost = 0;        
        totalPrice = Object.values(currentBike).map(item => item.cost).reduce((sum, curr) => sum + curr);
        return convert(totalPrice);
    }
    
    return {
        updateBike: function (compName, compChosen) {
            return updateBike (compName, compChosen);
        }
    }
})();



//|CONSTROL THE DISPLAY IN BROWSER WINDOW
let displayControl = (function () {
    //=============|CHANGE MAIN BIKE IMAGE TO HIGHLIGHT CHOSEN COMPONENT
    function changeBikeImage(comp, x) {
        if (x) {
            document.querySelector('.bikeImage').src = `images/bike${comp}.jpg`;
            setTimeout(function() {
                document.querySelector('.bikeImage').src = `images/bike.jpg`;
            }, 6000);
        } else {
            document.querySelector('.bikeImage').src = `images/bike.jpg`;
        }
    }
    
    //=============|CHANGE COMPONENT IMAGE BELOW THE DROPDOWN MENU
    function changeCompImage(comp, chosen) {
        if (chosen !== 'none') {
            document.querySelector(`.${comp}ImageBox`).style.display = 'block';
            console.log(`images/${comp}/${chosen}.jpg`);
            document.querySelector(`.${comp}Image`).src = `images/bike/${comp}/${chosen}.jpg`;
        } else {
            document.querySelector(`.${comp}ImageBox`).style.display = 'none';
        }
    }

    //=============|FUNCTION TO READ TEXT FROM FILE
    function loadFile(filePath) {
        let result = null;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              result = this.responseText;
            }
        };
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();
        return result;
    }

    //=============|UPDATE COMPONENT INFO BOX
    function updateCompInfoBox(comp, chosen) {
        if (chosen !== 'none') {
            document.querySelector('.firstShow').style.display = 'none';
            document.querySelector('.compInfo').style.display = 'block';
            let temp = loadFile(`compInfoBox/${chosen}.html`);
            document.querySelector('.compInfo').innerHTML = temp;
            
        } else {
            document.querySelector('.compInfo').style.display = 'none';
            document.querySelector('.firstShow').style.display = 'grid';
        }
    }
    

    //=============|UPDATE THE TOTAL BIKE PRICE
    function updateUIPrice(newPrice) {
        document.querySelector('.price').textContent = '£'+ newPrice;
    }
    
    return {
        changeBikeImage: function(comp, x) {
            changeBikeImage(comp, x);
        },
        changeCompImage: function(comp, chosen) {
            changeCompImage(comp, chosen);
        },
        updateCompInfoBox: function(comp, chosen) {
            updateCompInfoBox(comp, chosen);
        },
        updateUIPrice(newPrice) {
            updateUIPrice(newPrice);
        }
    }
    
})();



//|CONTROLS THE OTHER TWO MODULES
let mainController = (function (cctrl, dctrl) {
    let dropArray = ['frame', '.handleBar', 'saddle'];
    
    ///////////////|EVENT LISTENERS
    var eventListeners = function() {
        let temp = document.querySelectorAll('.ddown');
        temp.forEach(elm => {
            elm.onchange = function() {
                //=========|FOR FRAME
                let chosen = document.querySelector('.' + elm.classList[1]);
                let comp = elm.classList[1];
                comp = comp.slice(0, -6);
                //-----|Update image below dropdown
                dctrl.changeCompImage(comp, chosen.value);
                //-----|Update component info box
                dctrl.updateCompInfoBox(comp, chosen.value);
                //-----|Update internal bike specs, returns updated price
                console.log(comp, chosen)
                let updatedPrice = cctrl.updateBike(comp, chosen.value);
                //-----|Update price shown in the UI
                dctrl.updateUIPrice(updatedPrice);
                //=========|FRAME - CHANGE MAIN IMAGE
            }
        });
        
        temp = document.querySelectorAll('.equipForm');
        temp.forEach(elm => {
            let chosen = document.querySelector('.' + elm.classList[1]);
            let comp = elm.classList[1];
            comp = comp.slice(0, -4);
            chosen.addEventListener('focusin', function() {
                dctrl.changeBikeImage(comp, true);
            });
            //=========|FRAME - CHANGE MAIN IMAGE
            chosen.addEventListener('frameSelect', function() {
                dctrl.changeBikeImage(chomp, false);
            });
        });

    // var eventListeners = function() {
    //     //=========|FOR FRAME
    //     document.querySelector('.frameSelect').onchange = function() {
    //         let chosen = document.querySelector('.frameSelect').value;
    //         //-----|Update image below dropdown
    //         dctrl.changeCompImage('frame', chosen);
    //         //-----|Update component info box
    //         dctrl.updateCompInfoBox('frame', chosen);
    //         //-----|Update internal bike specs, returns updated price
    //         let updatedPrice = cctrl.updateBike('frame', chosen);
    //         //-----|Update price shown in the UI
    //         dctrl.updateUIPrice(updatedPrice);
    //     };
    //     //=========|FRAME - CHANGE MAIN IMAGE
    //     document.querySelector('.frameSelect').addEventListener('focusin', function() {
    //         dctrl.changeBikeImage('frame', true);
    //     });
    //     //=========|FRAME - CHANGE MAIN IMAGE
    //     document.querySelector('.frameSelect').addEventListener('focusout', function() {
    //         dctrl.changeBikeImage('frame', false);
    //     });
        
        // //=========|FOR HANDLE BARS
        // document.querySelector('.handleBarSelect').onchange = function() {
        //     //-----|Update image below dropdown
        //     let chosen = document.querySelector('.handleBarSelect').value;
        //     dctrl.changeCompImage('handleBar', chosen);
        //     //-----|Update component info box
        //     dctrl.updateCompInfoBox('frame', chosen);
        //     //-----|Update internal bike specs, returns updated price
        //     let updatedPrice = cctrl.updateBike('handleBar', chosen);
        //     //-----|Update price shown in the UI
        //     dctrl.updateUIPrice(updatedPrice);
        // };
        // //=========|HANDLE BARS - CHANGE MAIN IMAGE
        // document.querySelector('.handleBarSelect').addEventListener('focusin', function() {
        //     dctrl.changeBikeImage('handleBar', true);
        // });
        // //=========|HANDLE BARS - CHANGE MAIN IMAGE
        // document.querySelector('.handleBarSelect').addEventListener('focusout', function() {
        //     dctrl.changeBikeImage('handleBar', false);
        // });
    }
    
    
    
    return {
            init: function() {
            eventListeners();
        }
    }
    
})(configControl, displayControl);

mainController.init();