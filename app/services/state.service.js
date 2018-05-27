class AppState {
  set loading(value) {
    this._loading = value;
  }
  get loading() {
    return this._loading;
  }
  
}

export const appState = new AppState();