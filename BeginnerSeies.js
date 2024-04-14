function cockroachSpeed(s) {
    let cmPerSec = Math.floor ((s *100000)/3600);
      return cmPerSec;
    }
    console.log(cockroachSpeed(10.5));