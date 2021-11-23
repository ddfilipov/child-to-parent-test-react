import { PlayerDto } from "../dto/player";
import players from "../json/players.json"

export default class Player {
    static getListOfPlayers(): PlayerDto[]{
        let playerList : PlayerDto[];
        playerList = players;
        return playerList;
    }
}