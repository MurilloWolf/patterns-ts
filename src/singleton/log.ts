class Log {
  private static instance: Log;
  private history: string[];

  private constructor() {
    this.history = [];
  }

  public static getInstance() {
    if (!Log.instance) {
      Log.instance = new Log();
    }
    return Log.instance;
  }

  public log(message: string) {
    this.history.push(message);
  }

  public showLog() {
    console.log(this.history);
  }
}

const logger = Log.getInstance();
const logger2 = Log.getInstance();

logger2.log("Erro de login");
logger.log("Erro na requisicao");

logger.showLog();
