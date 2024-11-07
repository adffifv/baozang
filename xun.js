// 模拟宝藏地图API
class TreasureMap {
    static solvePuzzle() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const correctAnswer = prompt("请输入谜题答案（答案是'钥匙'）:");
          if (correctAnswer === '钥匙') {
            resolve("谜题解开! 前往古老的图书馆...");
          } else {
            reject("谜题解答错误! 无法前进。");
          }
        }, 1000);
      });
    }

    static getInitialClue() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
    }
  
    static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功! 宝藏在一座古老的神庙中，需要找到祭品才能进入...");
        }, 1500);
      });
    }
  
    static findSacrifice() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const correctItem = prompt("请输入祭品的名称（答案是'金苹果'）:");
          if (correctItem === '金苹果') {
            resolve("找到了祭品! 可以进入神庙了...");
          } else {
            reject("祭品错误! 无法进入神庙。");
          }
        }, 1000);
      });
    }
  
    static searchTemple(location) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕! 遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
    }
  
    static openTreasureBox() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜! 你找到了传说中的宝藏!");
        }, 1000);
      });
    }
  }

  function findTreasureWithPromises() {
    TreasureMap.solvePuzzle()
      .then(message => {
        console.log(message);
        return TreasureMap.getInitialClue();
      })
      .then(clue => {
        console.log(clue);
        return TreasureMap.decodeAncientScript(clue);
      })
      .then(location => {
        console.log(location);
        return TreasureMap.findSacrifice();
      })
      .then(sacrificeMessage => {
        console.log(sacrificeMessage);
        return TreasureMap.searchTemple("古老的神庙");
      })
      .then(box => {
        console.log(box);
        return TreasureMap.openTreasureBox();
      })
      .then(treasure => {
        console.log(treasure);
      })
      .catch(error => {
        console.error("任务失败:", error);
      });
  }

  findTreasureWithPromises()