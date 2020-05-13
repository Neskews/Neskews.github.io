import React, { useState } from 'react';
import { Filter } from './Filter/Filter';
import { Button } from "../../../../../Components/Button/Button";
import { Small } from "../../../../../Components/Headline/Small/Connector";

const EVENTS = [
  "Hochzeit",
  "Geburtstag",
  "Weihnachtsfeier"
];

const KINDS = [
  "Country",
  "Classic",
  "Jazz"
];

export const OPTIONS = {
  kinds: KINDS,
  events: EVENTS
}

export const FilterPart = ({
  onGoToBands,
  onSetKindFilter,
  onSetEventFilter,
  event,
  kind
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section>
      <Small
        label="Filtermöglichkeiten anzeigen"
        onClick={toggle}
      />
      {
        isOpen && (
          <>
            <Filter
              options={OPTIONS.events}
              onSelect={onSetEventFilter}
              label={event || "Events"}
            />
            <Filter
              options={OPTIONS.kinds}
              onSelect={onSetKindFilter}
              label={kind || "Art"}
            />
            <Button label={"Musiker finden"} onClick={onGoToBands} />
          </>
        )
      }
    </section>
  );
}