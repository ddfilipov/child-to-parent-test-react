import { FC } from "react";
import styled from "styled-components";

export interface Player {
    name: string;
    team: string;
    age: number;
    id: number;
}

interface ChildProps {
    player: Player;
}

const Container = styled.div`
    background-color: #f5efef;
    margin: 10px;
`;

export const Child: FC<ChildProps> = ({ player }) => {
    return (
        <Container>
            <ul>
                <li>Name: {player.name}</li>
                <li>Age: {player.age}</li>
                <li>Team: {player.team}</li>
                <input type="checkbox" />
            </ul>
        </Container>
    );
};
