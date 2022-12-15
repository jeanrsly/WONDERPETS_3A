import styles from "./Location.module.css";

export default function Location() {
    return (
        <div className={styles.container}>
           <div className={styles.image}>
            <img src="map.gif" alt="" />
           </div>

            <table className= {styles.message}>  
                <tbody>
                <tr>
                <td>
                    <h4>Dasmariñas</h4>
                    <ul>
                        <dt>Balay Zacharias Pet Home</dt>
                        <dt>Preslee’s Home</dt>
                        <dt>SPH Sweet Pets Haven</dt>
                    </ul>
                </td>
                <td>
                <h4>Bacoor</h4>
                <ul>
                    <dt>Shelter of Hope Bacoor</dt>
                    <dt>Timi Sanctuary</dt>
                    <dt>Pet it Furward</dt>
                </ul>
                </td>

                <td>
                <h4>Silang</h4>
                <ul>
                    <dt>Tails of Freedom Animal Haven</dt>
                    <dt>Eden Shelter</dt>
                    <dt>Care for Paws Shelter Sanctuary-</dt> 
                    <dt>CPSS Inc.</dt>
                </ul>
                </td>
                </tr>

                <tr>
                <td>
                <h4>Imus</h4>
                <ul>
                    <dt>Pet Planet</dt>
                    <dt>Pawzmate</dt>
                    <dt>VMSD Animal Clinic</dt>
                </ul>
                </td>

                <td>   
                    <h4>Cavite City</h4>
                <ul>
                    <dt>The KabarDogs City Pound</dt>
                    <dt>(City Veterinary Office)</dt>
                </ul>
                </td>

                <td>                 
                <h4>Amadeo</h4>
                <ul>
                    <dt>Preslee’s Home Animal Welfare</dt>
                    <dt>Sanctuary</dt>
                </ul>
                </td>
                </tr>

                <tr>
                <td>&nbsp;</td>   
                <td>
                <h4>Kawit</h4>
                <ul>
                    <dt>Petformance Veterinary Animal</dt>
                    <dt>Health and Wellness Clinic</dt>
                </ul>
            </td>
            <td>&nbsp;</td>
            </tr>
            </tbody> 
        </table>
        </div>
    )
}