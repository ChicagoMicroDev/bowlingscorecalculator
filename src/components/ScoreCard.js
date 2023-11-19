import React from "react";
import './ScoreCard.css'


export default function ScoreCard(){
    return(
        <>
<h1>Bowling Card</h1>
    <table>
        <thead>
            <tr>
                <th>Frame 1</th>
                <th>Frame 2</th>
                <th>Frame 3</th>
                <th>Frame 4</th>
                <th>Frame 5</th>
                <th>Frame 6</th>
                <th>Frame 7</th>
                <th>Frame 8</th>
                <th>Frame 9</th>
                <th>Frame 10</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr class="total">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
    </table>

        </>
    )
    
}

