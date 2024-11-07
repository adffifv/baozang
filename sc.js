async function findTreasureWithAsyncAwait() {
    try {
        const puzzleSolved = await TreasureMap.solvePuzzle();
        console.log(puzzleSolved);

        const clue = await TreasureMap.getInitialClue();
        console.log(clue);

        const location = await TreasureMap.decodeAncientScript(clue);
        console.log(location);

        const sacrificeMessage = await TreasureMap.findSacrifice();
        console.log(sacrificeMessage);

        const box = await TreasureMap.searchTemple("古老的神庙");
        console.log(box);

        const treasure = await TreasureMap.openTreasureBox();
        console.log(treasure);
    } catch (error) {
        console.error("任务失败:", error);
    }
}

findTreasureWithAsyncAwait()