//Из этого вообще ничего не используется

export const generateMetadata = (data, _attributesList, baseImageUri) => {
    let dateTime = Date.now();
    let tempMetadata = {
      dna: data.dna.join(""),
      name: `#${data.name}`,
      description: data.description,
      image: `${baseImageUri}/${data.edition}`,
      edition: data.edition,
      date: dateTime,
      attributes: _attributesList,
    };
    return tempMetadata;
  };

export const saveMetadata = (metadata) => {
    // var data = new FormData();
    // data.append("metadata.json" , metadata);
    // var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    // xhr.open( 'post', '../uploads', true );
    // xhr.send(data);
}