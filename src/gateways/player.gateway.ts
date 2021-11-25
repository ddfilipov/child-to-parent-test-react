import { PlayerDto } from "../dto/player";
import players from "../json/players.json"

export default class Player {
    static getListOfPlayers(): PlayerDto[]{
        let playerList : PlayerDto[];
        playerList = players;
        return playerList;
    }

    static getPlayerById(id: number) : PlayerDto{
        return Player.getListOfPlayers().find(player => player.id === id) as PlayerDto;
    }

    // static updatePlayersTeam(ids : number[]) :PlayerDTO[]{
    //     //Player.getListOfPlayers().map((player)=>())
    //     ids.map((id)=>(Player.getPlayerById(id).team="nuevo equipo"))
    //     Player.getListOfPlayers()
    //         .map((player)=>())
    // }
}