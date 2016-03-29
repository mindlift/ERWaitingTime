System.register(['angular2/core', './visit', './http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, visit_1, http_service_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.visits = [];
<<<<<<< HEAD
                    this.httpService.getQuery().subscribe(function (data) { return _this.parseVisit(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
=======
                    this.httpService.getQuery().subscribe(function (data) { return _this.msg = JSON.stringify(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d
                }
                VisitComponent.prototype.parseVisit = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVisit(item.pid, item.sid, item.room, item.visit_date);
                    });
                };
                VisitComponent.prototype.addVisit = function (pid, sid, room, date) {
                    var visit = new visit_1.Visit(pid, sid, room, date);
                    this.visits.push(visit);
                };
                VisitComponent.prototype.removeVisit = function (visit) {
                    var index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                };
                VisitComponent = __decorate([
                    core_1.Component({
                        selector: 'visit',
<<<<<<< HEAD
                        template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n            \n",
=======
                        template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n            \n            {{msg}}\n",
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlDQTtnQkFHQSx3QkFBb0IsV0FBd0I7b0JBSDVDLGlCQWdDQztvQkE3Qm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsRUFDN0IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFJO29CQUFmLGlCQU9DO29CQU5HLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxpQ0FBUSxHQUFSLFVBQVMsR0FBVSxFQUFFLEdBQVUsRUFBRSxJQUFXLEVBQUUsSUFBUztvQkFDL0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUdELG9DQUFXLEdBQVgsVUFBWSxLQUFXO29CQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQTNETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixRQUFRLEVBQUUscTJCQXdCYjt3QkFDRCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUN0QixDQUFDOztrQ0FBQTtnQkFpQ0YscUJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELDJDQWdDQyxDQUFBIiwiZmlsZSI6InZpc2l0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmlzaXR9IGZyb20gJy4vdmlzaXQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjondmlzaXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+IHBhdGllbnRfaWQgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHN0YWZmX2lkPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHJvb20gbnVtYmVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IGRhdGUgb2YgdmlzaXQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjdmlzaXQgb2YgdmlzaXRzXCI+IFxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5wYXRpZW50X2lkfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQuc3RhZmZfaWR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5yb29tfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQuZGF0ZX19IDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICBcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjUwMDBcIiBtYXg9XCIxMDAwMFwiICNwaWQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMDAwMFwiIG1heD1cIjQ5OTlcIiAjc2lkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjAwMDBcIiBtYXg9XCIxMDAwMFwiICNyb29tPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIkRhdGVcIiAjZGF0ZT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAoY2xpY2spPVwiXG4gICAgICAgICAgICBhZGRWaXNpdChwaWQudmFsdWUsIHNpZC52YWx1ZSwgcm9vbS52YWx1ZSwgZGF0ZS52YWx1ZSlcIj5cbiAgICAgICAgICAgIFxuYCxcbnByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZpc2l0Q29tcG9uZW50e1xudmlzaXRzOkFycmF5PFZpc2l0PjtcblxuY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgIHRoaXMudmlzaXRzID0gW107XG4gICAgdGhpcy5odHRwU2VydmljZS5nZXRRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVmlzaXQoZGF0YSksXG4gICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgKTtcbn1cblxucGFyc2VWaXNpdChqc29uKXtcbiAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZFZpc2l0KGl0ZW0ucGlkLFxuICAgICAgICBpdGVtLnNpZCxcbiAgICAgICAgaXRlbS5yb29tLFxuICAgICAgICBpdGVtLnZpc2l0X2RhdGUpO1xuICAgIH0pXG59XG5cbmFkZFZpc2l0KHBpZDpudW1iZXIsIHNpZDpudW1iZXIsIHJvb206bnVtYmVyLCBkYXRlOkRhdGUpe1xuICAgICAgICBsZXQgdmlzaXQgPSBuZXcgVmlzaXQocGlkLHNpZCxyb29tLGRhdGUpO1xuICAgICAgICB0aGlzLnZpc2l0cy5wdXNoKHZpc2l0KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmVtb3ZlVmlzaXQodmlzaXQ6VmlzaXQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZpc2l0cy5pbmRleE9mKHZpc2l0KTtcbiAgICAgICAgdGhpcy52aXNpdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFJQSx3QkFBb0IsV0FBd0I7b0JBSjVDLGlCQTBCQztvQkF0Qm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixFQUN2QyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBSUQsaUNBQVEsR0FBUixVQUFTLEdBQVUsRUFBRSxHQUFVLEVBQUUsSUFBVyxFQUFFLElBQVM7b0JBQy9DLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFHRCxvQ0FBVyxHQUFYLFVBQVksS0FBVztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkF0REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLDAzQkF5QmI7d0JBQ0QsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDdEIsQ0FBQzs7a0NBQUE7Z0JBMkJGLHFCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCwyQ0EwQkMsQ0FBQSIsImZpbGUiOiJ2aXNpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Zpc2l0fSBmcm9tICcuL3Zpc2l0JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3Zpc2l0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2lkIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBzdGFmZl9pZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiByb29tIG51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBkYXRlIG9mIHZpc2l0PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3Zpc2l0IG9mIHZpc2l0c1wiPiBcbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQucGF0aWVudF9pZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnN0YWZmX2lkfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQucm9vbX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LmRhdGV9fSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCI1MDAwXCIgbWF4PVwiMTAwMDBcIiAjcGlkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjAwMDBcIiBtYXg9XCI0OTk5XCIgI3NpZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwMDAwXCIgbWF4PVwiMTAwMDBcIiAjcm9vbT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJEYXRlXCIgI2RhdGU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIlxuICAgICAgICAgICAgYWRkVmlzaXQocGlkLnZhbHVlLCBzaWQudmFsdWUsIHJvb20udmFsdWUsIGRhdGUudmFsdWUpXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHt7bXNnfX1cbmAsXG5wcm92aWRlcnM6W0hUVFBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBWaXNpdENvbXBvbmVudHtcbm1zZzpzdHJpbmc7XG52aXNpdHM6QXJyYXk8VmlzaXQ+O1xuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgdGhpcy52aXNpdHMgPSBbXTtcbiAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMubXNnID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgKTtcbn1cblxuXG5cbmFkZFZpc2l0KHBpZDpudW1iZXIsIHNpZDpudW1iZXIsIHJvb206bnVtYmVyLCBkYXRlOkRhdGUpe1xuICAgICAgICBsZXQgdmlzaXQgPSBuZXcgVmlzaXQocGlkLHNpZCxyb29tLGRhdGUpO1xuICAgICAgICB0aGlzLnZpc2l0cy5wdXNoKHZpc2l0KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmVtb3ZlVmlzaXQodmlzaXQ6VmlzaXQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZpc2l0cy5pbmRleE9mKHZpc2l0KTtcbiAgICAgICAgdGhpcy52aXNpdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d
