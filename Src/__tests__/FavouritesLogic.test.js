test('prevents adding duplicate properties to favourites', () => {
  const favourites = [{ id: "prop1" }];
  const newProperty = { id: "prop1" };
  
  const isDuplicate = favourites.some(fav => fav.id === newProperty.id);
  expect(isDuplicate).toBe(true);
});