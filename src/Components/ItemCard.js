import { useParams } from "react-router-dom";
import useElement from "../utils/useElement";
import Shimmer from "./Shimmer";

const ItemCard = () => {
  const { elementId } = useParams();
  const element = useElement();

  if (!element.length) {
    return <Shimmer />;
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
    <div className="flex justify-center p-4 mb-4">
      <div className="w-1/2 p-4 rounded-2xl shadow-lg m-4" style={cardStyle}>
        <h2 className="p-2 font-bold m-2 text-center text-xl">
          {name} ({symbol}){" "}
        </h2>
        <p className="p-2 m-2">
          {" "}
          <span className="font-semibold text-lg">History:</span> {history}
        </p>
        <p className="text-xl p-2 m-2">
          <span className="font-semibold">Facts:</span>{" "}
          {facts ? (
            <p>{facts}</p>
          ) : (
            <p className="text-sm">Why don't you add some facts of your own?</p>
          )}
        </p>
        <p className="p-2 m-2">
          {" "}
          <span className="font-semibold">Atomic Number: </span> {atomicNumber}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">AtomicMass: </span> {atomicMass}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">AtomicRadius: </span> {atomicRadius}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">BoilingPoint: </span> {boilingPoint}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Bonding Type: </span> {bondingType}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Block: </span> {block}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Crystal Structure: </span>{" "}
          {crystalStructure}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Density: </span>
          {density}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Electron Affinity: </span>{" "}
          {electronAffinity}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Electro Negativity: </span>{" "}
          {electronegativity}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Electron Configuration: </span>{" "}
          {electronicConfiguration}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Group: </span>
          {group}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Group Block: </span> {groupBlock}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Ionization Energy: </span>{" "}
          {ionizationEnergy}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Ion Radius: </span> {ionRadius}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Magnetic Ordering: </span>{" "}
          {magneticOrdering}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Melting Point: </span> {meltingPoint}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Molar Heat Capacity: </span>{" "}
          {molarHeatCapacity}
        </p>
        <p className="p-2 m-2">
          {" "}
          <span className="font-semibold">OxidationStates: </span>{" "}
          {oxidationStates}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">period: </span> {period}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">VanDelWaalsRadius: </span>{" "}
          {vanDelWaalsRadius}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Speed Of Sound: </span> {speedOfSound}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Standard State: </span>{" "}
          {standardState}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Year Discovered: </span>{" "}
          {yearDiscovered}{" "}
        </p>
        <p className="p-2 m-2">
          <span className="font-semibold">Isotopes: </span>
          {isotopes}{" "}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
