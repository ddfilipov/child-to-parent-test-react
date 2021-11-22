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

const CustomCheckbox = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    > input {
        position: absolute;
        left: -100px;
        top: -100px;
    }
    > label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    > label:before {
        content: "";
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border: 1px solid #e0e0e0;
    }
    > input:focus + label:before {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    > input:checked + label {
        &:before {
            border-color: blue;
        }
        &:after {
            position: absolute;
            left: 0;
            bottom: 0;
            content: "";
            width: 1.4rem;
            height: 1.5rem;
            background-color: #000;
            // x-y
            //                 1x  1y   2x  2y   3x  3y   4x 4y   5x  5y   6x  6y
            clip-path: polygon(58% 30%, 72% 38%, 44% 88%, 10% 64%, 20% 52%, 38% 65%);


        }
    }
`;

export const Child: FC<ChildProps> = ({ player }) => {
    return (
        <Container>
            <ul>
                <li>Name: {player.name}</li>
                <li>Age: {player.age}</li>
                <li>Team: {player.team}</li>
                <CustomCheckbox>
                    <input type="checkbox" name={"check" + player.id} id={"check" + player.id} />
                    <label htmlFor={"check" + player.id}>asd</label>
                </CustomCheckbox>
                <input type="checkbox" />
            </ul>
        </Container>
    );
};
