// Create a variable to hold your NFT's
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, imageUrl) {
  const newNFT = {
    name: name,
    description: description,
    imageUrl: imageUrl
  };
  nftCollection.push(newNFT);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image URL:", nft.imageUrl);
    console.log("------------------------");
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

mintNFT("NFT 1", "Description for NFT 1", "https://example.com/nft1.png");
mintNFT("NFT 2", "Description for NFT 2", "https://example.com/nft2.png");

listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs:", totalSupply);