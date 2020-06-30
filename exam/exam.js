var baseball = {};

baseball.team = [];

baseball.score = {
    strike: 0,
    ball: 0,
    out: 0,
    hit: 0
}
baseball.getSign = function () {
    return this.score.strike + 'S ' + this.score.ball + 'B ' + this.score.out + 'O';
}
baseball.processStrike = function () {
    console.log('스트라이크!');
    this.score.strike++;
    if (this.score.strike === 3) {
        this.processOut();
    }
}
baseball.processBall = function () {
    console.log('볼!');
    this.score.ball++;
    if (this.score.ball === 4) {
        this.processHit();
    }
}
baseball.resetStrikeBallcount = function () {
    this.score.strike = 0;
    this.score.ball = 0;
}
baseball.processOut = function () {
    var message = '아웃!';
    this.score.out++;
    if (this.score.out < 3) {
        message += '다음 타자가 타석에 입장했습니다.';
    }
    this.resetStrikeBallcount();
    console.log(message);
}
baseball.processHit = function () {
    console.log('안타! 다음 타자가 타석에 입장했습니다.');
    this.score.hit++;
    this.resetStrikeBallcount();
}
baseball.setResult = function (result) {
    switch (result) {
        case 0: //strike
            this.processStrike();
            break;
        case 1: //ball
            this.processBall();
            break;
        case 2: //out
            this.processOut();
            break;
        case 3: //hit
            this.processHit();
            break;
        default:
            console.error('error');
    }
    console.log(this.getSign());
}
baseball.playGame = function () {
    console.log('신나는 야구 게임!');
    console.log('첫 번째 타자가 타석에 입장했습니다.');
    while (this.score.out < 3) {
        var result = Math.floor(Math.random() * 4);
        this.setResult(result);
    }
    console.log('최종 안타수: ' + this.score.hit);
    console.log('GAME OVER');
}
baseball.playGame();
