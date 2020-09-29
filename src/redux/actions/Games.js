export const Types = {
  SetSelectedGame: 'games.setSelectedGame',
};

export const Actions = {
  setSelectedGame: selectedGameId => ({
    type: Types.SetSelectedGame,
    selectedGameId,
  }),
};
