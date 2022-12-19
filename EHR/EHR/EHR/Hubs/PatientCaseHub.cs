using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.SignalR;

namespace EHR.Hubs
{
    public class PatientCaseHub:Hub
    {
        public async Task WatchPatientCase(int patientCaseId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, $"patientCase_{patientCaseId}");
        }

        public async Task SendPathologyMessage(int patientCaseId,int pathologyId)
        {
            await Clients.Group($"patientCase_{patientCaseId}").SendAsync("ReceivePathologyMessage", pathologyId.ToString());
        }

        public async Task SendRadiologyMessage(int patientCaseId, int radiologyId)
        {
            await Clients.Group($"patientCase_{patientCaseId}").SendAsync("ReceiveRadiologyMessage", radiologyId.ToString());
        }

        public async Task SendChiefComplaintHistoriesMessage(int patientCaseId, int chiefComplaintHistoriesId)
        {
            await Clients.Group($"patientCase_{patientCaseId}").SendAsync("ReceiveChiefComplaintHistoriesMessage", chiefComplaintHistoriesId.ToString());
        }
    }
}
