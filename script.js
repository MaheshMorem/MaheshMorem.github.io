var audios = new Audio('C.wav');
        var audio = new Audio('P.wav');
        var audioBack = new Audio('Back.wav');
        var audioDivide = new Audio('Divide.wav');
        var audio7 = new Audio('7.mp3');
        var audio8 = new Audio('8.mp3');
        var audio9 = new Audio('9.mp3');
        var audioM = new Audio('M.wav');
        var audio4 = new Audio('4.mp3');
        var audio5 = new Audio('5.mp3');
        var audio6 = new Audio('6.mp3');
        var audioPlus = new Audio('pl.mp3');
        var audio1 = new Audio('1.mp3');
        var audio2 = new Audio('2.mp3');
        var audio3 = new Audio('3.mp3');
        var audioMinus = new Audio('N.mp3');
        var audio0 = new Audio('0.mp3');
        var audioDot = new Audio('D.mp3');
        var audioEqual = new Audio('Equal.mp3');

        function backspace() {
            var b = document.getElementById('lable').value;
            if (b.length > 0) {
                var b1 = b.substring(0, b.length - 1);
                document.getElementById("lable").value = b1;

            }
        }

        function cleart() {
            document.getElementById("lable").value = "";
        }

        function operations() {
            var k = document.getElementById("lable").value;
            var k1 = eval(k);
            document.getElementById('lable').value = k1;
        }

        function display(n) {
            document.getElementById("lable").value += n;
        }
        function clearSound(x) {
            if (x == 1) { audios.play(); }
            if (x == 2) { audio.play(); }
            if (x == 3) { audioBack.play(); }
            if (x == 4) { audioDivide.play(); }

            if (x == 5) { audio7.play(); }
            if (x == 6) { audio8.play(); }
            if (x == 7) { audio9.play(); }
            if (x == 8) { audioM.play(); }

            if (x == 9) { audio4.play(); }
            if (x == 10) { audio5.play(); }
            if (x == 11) { audio6.play(); }
            if (x == 12) { audioPlus.play(); }

            if (x == 13) { audio1.play(); }
            if (x == 14) { audio2.play(); }
            if (x == 15) { audio3.play(); }
            if (x == 16) { audioMinus.play(); }

            if (x == 17) { audio0.play(); }
            if (x == 18) { audioDot.play(); }
            if (x == 19) { audioEqual.play(); }
        }
        function Equals() {
            audioEqual.play();
        }