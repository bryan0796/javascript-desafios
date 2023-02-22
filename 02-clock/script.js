const ponteiroSegundos = document.querySelector('.segundos');
    const ponteiroMinutos = document.querySelector('.minutos');
    const ponteiroHoras = document.querySelector('.horas');

    function setDate() {
      const agora = new Date();

      const segundos = agora.getSeconds();
      const segundosDeg = ((segundos / 60) * 360);
      ponteiroSegundos.style.transform = `rotate(${segundosDeg}deg)`;

      const mins = agora.getMinutes();
      const minsDeg = ((mins / 60) * 360) + ((segundos / 60) * 6);
      ponteiroMinutos.style.transform = `rotate(${minsDeg}deg)`;

      const hour = agora.getHours();
      const hourDeg = ((hour / 12) * 360) + ((mins / 60) * 30);
      ponteiroHoras.style.transform = `rotate(${hourDeg}deg)`;
    }

    setInterval(setDate, 1000)
    setDate();