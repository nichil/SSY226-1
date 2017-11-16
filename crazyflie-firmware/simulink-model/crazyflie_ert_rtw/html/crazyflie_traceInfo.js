function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "crazyflie"};
	this.sidHashMap["crazyflie"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Base_Thrust"] = {sid: "crazyflie:11"};
	this.sidHashMap["crazyflie:11"] = {rtwname: "<Root>/Base_Thrust"};
	this.rtwnameHashMap["<Root>/Ref_Roll"] = {sid: "crazyflie:12"};
	this.sidHashMap["crazyflie:12"] = {rtwname: "<Root>/Ref_Roll"};
	this.rtwnameHashMap["<Root>/Ref_Pitch"] = {sid: "crazyflie:13"};
	this.sidHashMap["crazyflie:13"] = {rtwname: "<Root>/Ref_Pitch"};
	this.rtwnameHashMap["<Root>/Ref_YawRate"] = {sid: "crazyflie:172"};
	this.sidHashMap["crazyflie:172"] = {rtwname: "<Root>/Ref_YawRate"};
	this.rtwnameHashMap["<Root>/Acc_x"] = {sid: "crazyflie:5"};
	this.sidHashMap["crazyflie:5"] = {rtwname: "<Root>/Acc_x"};
	this.rtwnameHashMap["<Root>/Acc_y"] = {sid: "crazyflie:6"};
	this.sidHashMap["crazyflie:6"] = {rtwname: "<Root>/Acc_y"};
	this.rtwnameHashMap["<Root>/Acc_z"] = {sid: "crazyflie:7"};
	this.sidHashMap["crazyflie:7"] = {rtwname: "<Root>/Acc_z"};
	this.rtwnameHashMap["<Root>/Gyro_x"] = {sid: "crazyflie:8"};
	this.sidHashMap["crazyflie:8"] = {rtwname: "<Root>/Gyro_x"};
	this.rtwnameHashMap["<Root>/Gyro_y"] = {sid: "crazyflie:9"};
	this.sidHashMap["crazyflie:9"] = {rtwname: "<Root>/Gyro_y"};
	this.rtwnameHashMap["<Root>/Gyro_z"] = {sid: "crazyflie:10"};
	this.sidHashMap["crazyflie:10"] = {rtwname: "<Root>/Gyro_z"};
	this.rtwnameHashMap["<Root>/Node_x0"] = {sid: "crazyflie:416"};
	this.sidHashMap["crazyflie:416"] = {rtwname: "<Root>/Node_x0"};
	this.rtwnameHashMap["<Root>/Node_y0"] = {sid: "crazyflie:417"};
	this.sidHashMap["crazyflie:417"] = {rtwname: "<Root>/Node_y0"};
	this.rtwnameHashMap["<Root>/Node_z0"] = {sid: "crazyflie:418"};
	this.sidHashMap["crazyflie:418"] = {rtwname: "<Root>/Node_z0"};
	this.rtwnameHashMap["<Root>/Range_sensor"] = {sid: "crazyflie:419"};
	this.sidHashMap["crazyflie:419"] = {rtwname: "<Root>/Range_sensor"};
	this.rtwnameHashMap["<Root>/Dist_0"] = {sid: "crazyflie:420"};
	this.sidHashMap["crazyflie:420"] = {rtwname: "<Root>/Dist_0"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "crazyflie:414"};
	this.sidHashMap["crazyflie:414"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "crazyflie:415"};
	this.sidHashMap["crazyflie:415"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/ToDouble"] = {sid: "crazyflie:151"};
	this.sidHashMap["crazyflie:151"] = {rtwname: "<Root>/ToDouble"};
	this.rtwnameHashMap["<Root>/ToDouble1"] = {sid: "crazyflie:153"};
	this.sidHashMap["crazyflie:153"] = {rtwname: "<Root>/ToDouble1"};
	this.rtwnameHashMap["<Root>/ToDouble2"] = {sid: "crazyflie:154"};
	this.sidHashMap["crazyflie:154"] = {rtwname: "<Root>/ToDouble2"};
	this.rtwnameHashMap["<Root>/ToDouble3"] = {sid: "crazyflie:179"};
	this.sidHashMap["crazyflie:179"] = {rtwname: "<Root>/ToDouble3"};
	this.rtwnameHashMap["<Root>/ToDouble4"] = {sid: "crazyflie:180"};
	this.sidHashMap["crazyflie:180"] = {rtwname: "<Root>/ToDouble4"};
	this.rtwnameHashMap["<Root>/ToDouble5"] = {sid: "crazyflie:181"};
	this.sidHashMap["crazyflie:181"] = {rtwname: "<Root>/ToDouble5"};
	this.rtwnameHashMap["<Root>/ToUint16"] = {sid: "crazyflie:143"};
	this.sidHashMap["crazyflie:143"] = {rtwname: "<Root>/ToUint16"};
	this.rtwnameHashMap["<Root>/ToUint16_1"] = {sid: "crazyflie:144"};
	this.sidHashMap["crazyflie:144"] = {rtwname: "<Root>/ToUint16_1"};
	this.rtwnameHashMap["<Root>/ToUint16_2"] = {sid: "crazyflie:145"};
	this.sidHashMap["crazyflie:145"] = {rtwname: "<Root>/ToUint16_2"};
	this.rtwnameHashMap["<Root>/ToUint16_3"] = {sid: "crazyflie:146"};
	this.sidHashMap["crazyflie:146"] = {rtwname: "<Root>/ToUint16_3"};
	this.rtwnameHashMap["<Root>/Motor_1"] = {sid: "crazyflie:51"};
	this.sidHashMap["crazyflie:51"] = {rtwname: "<Root>/Motor_1"};
	this.rtwnameHashMap["<Root>/Motor_2"] = {sid: "crazyflie:52"};
	this.sidHashMap["crazyflie:52"] = {rtwname: "<Root>/Motor_2"};
	this.rtwnameHashMap["<Root>/Motor_3"] = {sid: "crazyflie:53"};
	this.sidHashMap["crazyflie:53"] = {rtwname: "<Root>/Motor_3"};
	this.rtwnameHashMap["<Root>/Motor_4"] = {sid: "crazyflie:54"};
	this.sidHashMap["crazyflie:54"] = {rtwname: "<Root>/Motor_4"};
	this.rtwnameHashMap["<Root>/Log1"] = {sid: "crazyflie:55"};
	this.sidHashMap["crazyflie:55"] = {rtwname: "<Root>/Log1"};
	this.rtwnameHashMap["<Root>/Log2"] = {sid: "crazyflie:56"};
	this.sidHashMap["crazyflie:56"] = {rtwname: "<Root>/Log2"};
	this.rtwnameHashMap["<Root>/Log3"] = {sid: "crazyflie:78"};
	this.sidHashMap["crazyflie:78"] = {rtwname: "<Root>/Log3"};
	this.rtwnameHashMap["<Root>/Log4"] = {sid: "crazyflie:182"};
	this.sidHashMap["crazyflie:182"] = {rtwname: "<Root>/Log4"};
	this.rtwnameHashMap["<Root>/Log5"] = {sid: "crazyflie:183"};
	this.sidHashMap["crazyflie:183"] = {rtwname: "<Root>/Log5"};
	this.rtwnameHashMap["<Root>/Log6"] = {sid: "crazyflie:184"};
	this.sidHashMap["crazyflie:184"] = {rtwname: "<Root>/Log6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();