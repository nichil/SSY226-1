function TraceInfoFlag() {
    this.traceFlag = new Array();
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["crazyflie.c:36"]=1;
    this.lineTraceFlag["crazyflie.c:41"]=1;
    this.lineTraceFlag["crazyflie.c:46"]=1;
    this.lineTraceFlag["crazyflie.c:51"]=1;
    this.lineTraceFlag["crazyflie.c:58"]=1;
    this.lineTraceFlag["crazyflie.c:63"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();