import { useParams } from "react-router-dom";
import useElement from "../utils/useElement";

const ItemCard = () => {
  const { elementId } = useParams();
  const element = useElement();

  if (!element.length) {
    return <h1>Loading...</h1>;
  }

  // Find the element with the matching ID
  const elementInfo = element.find((element) => element.symbol === elementId);
  const {
    name,
    symbol,
    history,
    facts,
    boilingPoint,
    atomicRadius,
    atomicMass,
    atomicNumber,
    electronAffinity,
    density,
    electronegativity,
    electronicConfiguration,
    bondingType,
    block,
    crystalStructure,
    group,
    groupBlock,
    ionRadius,
    ionizationEnergy,
    magneticOrdering,
    meltingPoint,
    molarHeatCapacity,
    oxidationStates,
    vanDelWaalsRadius,
    isotopes,
    yearDiscovered,
    standardState,
    speedOfSound,
    period,
  } = elementInfo;
  if (!elementInfo) {
    return <div>Element details not found</div>;
  }
  const cardStyle = {
    backgroundColor: `#${elementInfo.cpkHexColor}`,
  };
  return (
    <div style={cardStyle} class="flex flex-col">
      <div class="flex m-auto pt-2">
        <div className="font-bold text-2xl">
          {name} ({symbol}){" "}
        </div>
      </div>
      <div>
        <div className="font-semibold text-center text-md p-6">{history} </div>
      </div>
      <div class="flex gap-4 m-auto">
        <div className="p-4">
          <p><span className="font-semibold">Atomic Number :</span>{atomicNumber}</p>
          <p><span className="font-semibold">Atomic Mass :</span> {atomicMass}</p>
          <p><span className="font-semibold">Atomic Radius : </span>{atomicRadius}</p>
        </div>
        <div className="p-4">
          <p><span className="font-semibold">Boiling Point: </span>{boilingPoint}</p>
          <p><span className="font-semibold">Block: </span> {block}</p>
          <p> <span className="font-semibold">Bonding Type: </span> {bondingType} </p>
            </div>
        <div className="p-4">
          <p><span className="font-semibold" >Density: </span> {density} </p>
          <p><span className="font-semibold" >Electron Affinity: </span> {electronAffinity} </p>
          <p><span className="font-semibold" >Electro Negativity: </span> {electronegativity} </p>
        </div>
        <div className="p-4">
          <p><span className="font-semibold" >Electronic Configuration: </span> {electronicConfiguration} </p>
          <p><span className="font-semibold" >Group: </span> {group} </p>
          <p><span className="font-semibold" >Group Block: </span> {groupBlock} </p>
        </div>
      </div>
      <div class="flex gap-4 m-auto">
      <div className="p-4">
          <p><span className="font-semibold" >Ion Radius: </span> {ionRadius} </p>
          <p><span className="font-semibold" >Ionization Energy: </span> {ionizationEnergy} </p>
          <p><span className="font-semibold" >Oxidation States: </span> {oxidationStates} </p>
        </div>
        <div className="p-4">
          <p><span className="font-semibold" >Melting Point: </span> {meltingPoint} </p>
          <p><span className="font-semibold" >Magnetic Ordering: </span> {magneticOrdering} </p>
          <p><span className="font-semibold" >Molar Heat Capacity: </span> {molarHeatCapacity} </p>
        </div>
        <div className="p-4">
          <p><span className="font-semibold" >Period: </span> {period} </p>
          <p><span className="font-semibold" >VanDelWaals Radius: </span> {vanDelWaalsRadius} </p>
          <p><span className="font-semibold" >Year Discovered: </span> {yearDiscovered} </p>
        </div>
      </div>
      <div className="flex gap-4 m-auto">
      <div className="p-4">
          <p><span className="font-semibold" >Speed Of Sound: </span> {speedOfSound} </p>
          <p><span className="font-semibold" >Standard State: </span> {standardState} </p>
          <p><span className="font-semibold">Crystal Structure: </span>{crystalStructure}</p>
       </div>
      </div>
      <div className="flex gap-4 p-6 m-auto">
      <p><span className="font-semibold">Isotopes: </span>{isotopes.split(",")}</p>
 
      </div>
      
      <div className="text-center text-md  p-6 gap-4 m-auto">
      <p><span className="font-semibold ">Facts: </span>{facts? facts : <h2>Add some facts of your own...</h2>} </p>
      
      </div>
      
    </div>
  );
};

export default ItemCard;
