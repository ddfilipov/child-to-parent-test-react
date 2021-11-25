import React, { useCallback, useEffect, useState } from "react";
import { Child } from "./Child";
import styled from "styled-components";
import Player from "./gateways/player.gateway";
import axios from "axios";

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    span {
        display: block;
    }
`;

const baseURL = "http://localhost:8055/items/players";

export const Parent = () => {
    const [players, setPlayers] = useState(Player.getListOfPlayers);
    const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [apiPlayers, setApiPlayers] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setApiPlayers(response.data.data);
        });
    }, []);

    function checkearApi() {
        console.log(apiPlayers);
    }

    const selectPlayer = (selected: boolean, playerId: number) => {
        if (selected) {
            setSelectedPlayers((oldList) => [...oldList, playerId]);
        } else {
            setSelectedPlayers(selectedPlayers.filter((player) => player !== playerId));
        }
        console.log("saliendo de selectPlayer");
        console.log(selectedPlayers);
    };

    const modifyFirstPlayerTeam = () => {};

    useEffect(() => {
        console.log("entrando en useEffect");
        console.log(selectedPlayers);
        setButtonDisabled(selectedPlayers.length > 0 ? false : true);
    }, [selectedPlayers]);

    const getPlayerAttrs = useCallback(() => {
        const player = Player.getPlayerById(4);
        console.log(player);
    }, []);

    if (!apiPlayers) return null;
    return (
        <Container>
            <h2>Players</h2>
            {players.map((player) => (
                <Child playerAttrs={player} key={player.id} selectPlayer={selectPlayer} />
            ))}
            <div>
                <label>New Team: </label>
                <input type="text"></input>
                <button disabled={buttonDisabled} onClick={modifyFirstPlayerTeam}>
                    Modify
                </button>
                <span>Players selected: {selectedPlayers.length}</span>
                <button onClick={checkearApi}>Test</button>
            </div>
        </Container>
    );
};
