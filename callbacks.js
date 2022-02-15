const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const spanResult = document.getElementById('resultsSpan');

    /*
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    addEventListener(type, listener);
    addEventListener(type, listener, options);
    addEventListener(type, listener, useCapture);
    */
    btn1.addEventListener('click', function(event) {
        spanResult.textContent = 'You clicked button 1!';
        
    });

    btn2.addEventListener('click', function(event) {
        changeSpanMessage(spanResult, 'You clicked button 2!');
        //clear the span message in 10 sec
        setTimeout(clearSpanMessage, 10000, 'test');
    });

    btn3.addEventListener('click', function(event) {
        changeSpanMessage(spanResult, 'You clicked button 3!');
        let tbMessage = document.getElementById('tbMessage');
        console.log("tbMessage: ", tbMessage);
        let message = tbMessage.value;
        console.log("message: ", message);
        //clear the span message in 10 sec
        setTimeout(changeSpanMessage, 10000, spanResult, message);
    });

    const changeSpanMessage = function (spanForMessage, message) {
        console.log("message: ", message);
        spanForMessage.textContent = message;
    }

    const clearSpanMessage = function(msg) {
        console.log("msg: ", msg);
        spanResult.textContent = '';
    }