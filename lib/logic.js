async function SellCrop(tx) {
    tx.crop.owner.balance += tx.amount;
    tx.buyer.balance -= tx.amount;
    tx.crop.owner = tx.buyer;
    const assetRegistry = await getAssetRegistry('org.example.basic.Crop');
    await assetRegistry.update(tx.crop);
}
